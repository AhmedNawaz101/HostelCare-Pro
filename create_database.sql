-- Run as postgres superuser
CREATE DATABASE hmsdb;

-- Create application user
CREATE USER hms WITH ENCRYPTED PASSWORD 'hms';
GRANT ALL PRIVILEGES ON DATABASE hmsdb TO hms;
