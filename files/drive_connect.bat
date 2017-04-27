@echo off
net use * /delete /y
@echo off
net use V: \\192.168.1.100\a /p:yes
@echo off
net use X: \\192.168.1.100\b /p:yes
@echo off
