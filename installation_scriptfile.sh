mkdir shinchan
cd shinchan/
yum install git 
git init

echo "================================== GIT INSTALLED SUCCESSFULLY ===================================="
git pull https://github.com/harinadh14/shinchan.git

amazon-linux-extras install epel

echo -e "[mongodb-org-6.0] \nname=MongoDB Repository \nbaseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/6.0/x86_64/ \ngpgcheck=1 \nenabled=1 \ngpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc \n" > /etc/yum.repos.d/mongodb-org-6.0.repo

yum install mongodb-org
systemctl start mongod
systemctl enable mongod
echo "=================================== mongoDB installed ============================================"

echo -e "# .bashrc\n# User specific aliases and functions \n  \n \nalias rm='rm -i' \nalias cp='cp -i' \nalias mv='mv -i' \n \n \n# Source global definitions \nif [ -f /etc/bashrc ]; then \n. /etc/bashrc \nfi\n \nPATH='/root/shinchan/scripting:$PATH '
" > /root/.bashrc

echo "=====================ROOT PATH SETTED SUCCESSFULLY ==============================================="


curl --silent --location https://rpm.nodesource.com/setup_16.x | bash -

yum -y install nodejs
echo "+++++++++++++++++++++++++++++++++ NODE-16 INSTALLED SUCCESSFULLY +++++++++++++++++++++++++++++++++++"


yum install docker -y 
systemctl start docker
systemctl enable  docker
echo "====================== DOCKER INSTALLED SUCCESSFULLY ==============================================="

yum install shellinabox
systemctl start shellinaboxd
systemctl enable shellinaboxd

echo -e "# Shell in a box daemon configuration \n# For details see shellinaboxd man page \n \n# Basic options \nUSER=shellinabox \nGROUP=shellinabox \nCERTDIR=/var/lib/shellinabox \nPORT=2323 \nOPTS='--disable-ssl-menu -s /:LOGIN' \n \n \n# Additional examples with custom options: \n \n# Fancy configuration with right-click menu choice for black-on-white: \n# OPTS="--user-css Normal:+black-on-white.css,Reverse:-white-on-black.css --disable-ssl-menu -s /:LOGIN" \n# Simple configuration for running it as an SSH console with SSL disabled: \n# OPTS='-t -s /:SSH:host.example.com' \n 
" > /etc/sysconfig/shellinaboxd

systemctl restart shellinaboxd.service
echo "====================== SHELL IN A BOX INST SUCCESSFULLY ==============="

cd /root/shinchan/scripting
chmod +x $(ls -a )

echo "================== mode of the files changed to excutable =========="
