import cyberpi
import time
import usocket
import ujson
import os
import socket
 
 
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
 
    
# Function to receive and execute movement command from server
def receive_and_execute_command():
    # Create a TCP/IP socket
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Bind the socket to the address and port
    server_address = ('0.0.0.0', 3000)  # Listen on all available network interfaces
    server_socket.bind(server_address)
    # Listen for incoming connections
    server_socket.listen(1)
    cyberpi.console.println('Server is listening for commands...')
 
    while True:
        # Wait for a connection
        connection, client_address = server_socket.accept()
        try:
            cyberpi.console.println('Connection from:', client_address)
 
            # Receive the data in small chunks and reassemble it
            data = connection.recv(1024)
            command = data.decode('utf-8').strip()
 
            if command:
                cyberpi.console.println('Received command:', command)
                execute_command(command)
                response = 'Command executed'
            else:
                response = 'No command received'
 
            # Send response back to the server
            connection.sendall(response.encode('utf-8'))
 
        finally:
            # Clean up the connection
            connection.close()
def execute_command(command):
    # Implement logic to execute the command on the mBot 2
    if command == 'forward':
        cyberpi.console.println('Moving forward')
        cyberpi.mbot2.drive_power(20, -(20)) 
    elif command == 'backward':
        cyberpi.console.println('Moving backward')
        cyberpi.mbot2.drive_power(-(20), 20) 
    elif command == 'right':
        cyberpi.console.println('Moving right')
        cyberpi.mbot2.drive_power(20, -5) 
        cyberpi.led.on(255,0,0,id=4)
    elif command == 'left':
        cyberpi.console.println('Moving left')
        cyberpi.mbot2.drive_power(5, -20)
        cyberpi.led.on(255,0,0,id=2)
        
    elif command =='stop':
        move_forward(1, 0)
    else:
        print('Unsupported command:', command)
 
def move_forward(duration, speed):
    cyberpi.mbot2.forward(speed = speed, run_time = duration)
 
 
receive_and_execute_command()