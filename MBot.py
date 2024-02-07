import cyberpi
import time
import usocket
import ujson
import os
import machine
import time


# blue
cyberpi.led.on(0, 0, 255)

# green
cyberpi.led.on(0, 255, 0)

# red
cyberpi.led.on(255, 0, 0)




# Connect to the Wi-Fi network
cyberpi.network.config_sta("htljoh-public", "joh12345")

# blue during the connection setup
cyberpi.led.on(0, 0, 255)


while True:
    # Check if connected to the Wi-Fi network
    b = cyberpi.network.is_connect()
    if b == False:
        cyberpi.led.on(255, 0, 0)  # Red LED if not connected
        time.sleep(1)
    else:
        cyberpi.led.on(0, 255, 0)  #Green
        
        sockaddr = cyberpi.network.get_ip()
        cyberpi.console.println("IP:")
        cyberpi.console.println(sockaddr)
        time.sleep(5)  # Display for 5 seconds
        cyberpi.display.clear()
        break


# Blue
cyberpi.led.on(0, 0, 255)






# Get the IP address, subnet mask, and gateway
subnet = cyberpi.network.get_subnet_mark()
gateway = cyberpi.network.get_gateway()
sockaddr = cyberpi.network.get_ip()


# Create a UDP socket and bind it to the IP address and port 3500
s = usocket.socket(usocket.AF_INET, usocket.SOCK_DGRAM)
s.bind((sockaddr, 3500))




# Example usage of the socket (not provided in the original code)
# You can use the socket 's' for sending and receiving data over UDP
# For example, sending data to IP address 10.10.10.10 on port 3500:
# s.sendto(b"Hello, server!", ("10.10.10.10", 3500))

s.sendto(b"Hello, server!", (sockaddr, 3500))

i = 1


