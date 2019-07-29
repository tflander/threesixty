import pytest
from unittest.mock import patch, ANY
import machine_stub


@pytest.fixture(autouse=True)
def machine_fixture():
    with patch.dict("sys.modules", machine=machine_stub):
        with patch('machine.PWM') as p:
            yield p


def test_should_stop_servo_motor_on_startup(machine_fixture):
    from platr import Platr, STOP
    Platr('23')
    machine_fixture.assert_called_with(ANY, freq=50)
    machine_fixture.return_value.duty.assert_called_with(STOP)