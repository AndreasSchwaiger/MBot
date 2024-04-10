import cyberpi
import time
import usocket
import ujson
import os

cyberpi.led.on(0, 0,255) #Lights up all the LEDs

#cyberpi.wifi.connect("htljoh-public", "joh12345")
cyberpi.network.config_sta("htljoh-public", "joh12345")

while True:
#    b = cyberpi.wifi.is_connect()
    b = cyberpi.network.is_connect()
    if b == False:
        cyberpi.led.on(255,0, 0)
        time.sleep(1)
    else:
        cyberpi.led.on(0,255, 0)
        break

sockaddr = cyberpi.network.get_ip()
cyberpi.console.println(sockaddr)

#subnet = cyberpi.network.get_subnet_mark()
#cyberpi.console.println(subnet)

gateway = cyberpi.network.get_gateway()
cyberpi.console.println(gateway)

s = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)

s.bind ((sockaddr, 1235))
i =1

name = "SUPERPI"
