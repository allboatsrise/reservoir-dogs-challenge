<?php
// DON'T REMOVE THIS: Used to simulate up to 1 second network latency
usleep(rand(0, 1000000));

// HINT: PDO connection string
$dsn = 'sqlite:' . __DIR__ . '/../../data/database.sqlite';
