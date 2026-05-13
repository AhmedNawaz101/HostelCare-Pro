DO
$$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'hms') THEN
    CREATE ROLE hms LOGIN PASSWORD 'hms';
  END IF;
END
$$;

ALTER DATABASE hmsdb OWNER TO hms;
GRANT ALL PRIVILEGES ON DATABASE hmsdb TO hms;

-- backup first (recommended)
-- then update checksum to the resolved value shown in your logs (926803321)
UPDATE flyway_schema_history
SET checksum = 926803321
WHERE version = '1';

-- backup first (recommended)
-- then update checksum to the resolved value shown in your logs (926803321)
UPDATE flyway_schema_history
SET checksum = 926803321
WHERE version = '1';