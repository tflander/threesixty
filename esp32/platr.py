import machine, time

STOP = 77
MIN_CLOCKWISE = 83
MAX_CLOCKWISE = 115
MIN_COUNTERCLOCKWISE = 72
MAX_COUNTERCLOCKWISE = 39
SLOW = 100

class Platr:

    def __init__(self, servoPinNumber):
        self.servo = machine.PWM(machine.Pin(servoPinNumber), freq=50)

    def rotateClockwiseMedium(self):
        self.servo.duty(MIN_CLOCKWISE)

    def rotateCounterClockwiseMedium(self):
        self.servo.duty(MIN_COUNTERCLOCKWISE)

    def stop(self):
        self.servo.duty(STOP)

    def _rotateWithDelay(self, rotateTimeMs, stopTimeMs, isClockwise=True):

        if isClockwise:
            self.rotateClockwiseMedium()
        else:
            self.rotateCounterClockwiseMedium()

        time.sleep_ms(rotateTimeMs)
        self.stop()
        time.sleep_ms(stopTimeMs)

    def _rotateSlowWithDelay(self, rotateTimeMs, stopTimeMs, isClockwise=True):
        while True:
            self._rotateWithDelay(rotateTimeMs, stopTimeMs, isClockwise)

    def nudgeClockwise(self):
        self._rotateWithDelay(SLOW, SLOW, isClockwise = True)

    def nudgeCounterClockwise(self):
        self._rotateWithDelay(SLOW, SLOW, isClockwise = False)

    def rotateClockwiseSlow(self):
        self._rotateSlow(isClockwise=True)

    def rotateCounterlockwiseSlow(self):
        self._rotateSlow(isClockwise=False)

    def _rotateSlow(self, isClockwise=True):
        self._rotateSlowWithDelay(SLOW, SLOW, isClockwise)

    import _thread
    def _rotateClockwiseSlowAsync(self):
        _thread.start_new_thread(rotateClockwiseSlow, ())