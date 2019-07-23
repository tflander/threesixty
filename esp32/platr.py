import machine, time

STOP = 77
MIN_CLOCKWISE = 83
MAX_CLOCKWISE = 115
MIN_COUNTERCLOCKWISE = 72
MAX_COUNTERCLOCKWISE = 39
SLOW = 100

SMALL_TURN = 100
MEDIUM_TURN = 500
LARGE_TURN = 1000

class Platr:

    def __init__(self, servoPinNumber):
        self.servo = machine.PWM(machine.Pin(servoPinNumber), freq=50)
        self.servo.duty(STOP)

    def rotateClockwiseSmall(self):
        self._rotateWithDelay(SMALL_TURN, 0, isClockwise=True)

    def rotateCounterClockwiseSmall(self):
        self._rotateWithDelay(SMALL_TURN, 0, isClockwise=False)

    def rotateClockwiseMedium(self):
        self._rotateWithDelay(MEDIUM_TURN, 0, isClockwise=True)

    def rotateCounterClockwiseMedium(self):
        self._rotateWithDelay(MEDIUM_TURN, 0, isClockwise=False)

    def rotateClockwiseLarge(self):
        self._rotateWithDelay(LARGE_TURN, 0, isClockwise=True)

    def rotateCounterClockwiseLarge(self):
        self._rotateWithDelay(LARGE_TURN, 0, isClockwise=False)

    def stop(self):
        self.servo.duty(STOP)

    def _rotateWithDelay(self, rotateTimeMs, stopTimeMs, isClockwise=True):

        if isClockwise:
            self.servo.duty(MIN_CLOCKWISE)
        else:
            self.servo.duty(MIN_COUNTERCLOCKWISE)

        time.sleep_ms(rotateTimeMs)
        self.stop()
        time.sleep_ms(stopTimeMs)


    import _thread
    def _rotateClockwiseSlowAsync(self):
        _thread.start_new_thread(rotateClockwiseSlow, ())