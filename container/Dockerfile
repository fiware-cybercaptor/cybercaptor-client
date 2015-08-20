############################################################
# Dockerfile to build and run the FIWARE CyberCAPTOR Client
# Based on Ubuntu
############################################################

# Use phusion/passenger-full as base image.

FROM phusion/passenger-customizable:0.9.16

# Set correct environment variables.
ENV HOME /home/app
WORKDIR /home/app


# Download cybercaptor-client sources
RUN git clone https://github.com/fiware-cybercaptor/cybercaptor-client.git

WORKDIR /home/app/cybercaptor-client

# Add nginx configuration
RUN rm /etc/nginx/sites-enabled/default
ADD cybercaptor-client.conf /etc/nginx/sites-enabled/cybercaptor-client.conf

# Enable nginx
RUN rm -f /etc/service/nginx/down

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80
# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]
