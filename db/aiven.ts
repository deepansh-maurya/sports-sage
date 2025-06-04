// const fs = require("fs");
// const pg = require("pg");
// const url = require("url");

// const config = {
//   user: "avnadmin",
//   password: "AVNS_1Ori2UeKC-9uA2Na49H",
//   host: "pg-2906e60f-deepanshmaurya135-3d54.i.aivencloud.com",
//   port: 24293,
//   database: "defaultdb",
//   ssl: {
//     rejectUnauthorized: true,
//     ca: `-----BEGIN CERTIFICATE-----
// MIIEQTCCAqmgAwIBAgIUf913u6o4wrVX4SJzuoLp/VCg+34wDQYJKoZIhvcNAQEM
// BQAwOjE4MDYGA1UEAwwvMDQ5YzdhOWYtNWMxNC00NDZjLWE4NzctMjk5NDQxYjRk
// N2FjIFByb2plY3QgQ0EwHhcNMjQwNzI3MTQyMDMzWhcNMzQwNzI1MTQyMDMzWjA6
// MTgwNgYDVQQDDC8wNDljN2E5Zi01YzE0LTQ0NmMtYTg3Ny0yOTk0NDFiNGQ3YWMg
// UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANQ3XbPH
// 8xpW8yttI+ZfVxw2gMuBZcc4uAEXNuFxhR5xRm8+pjaTeg+DNU29yQUfbl4L8pJp
// /oz3hpLdIztlPyqnQEjho+IBnErM1X2Oy6LSJWtvBLdb05FoOoYkW8F3mog7z9PM
// 0TTOVP5TuScfys5KopH7JEFLajOCFjvKQ58zMQvHNyV42I+n7OHT9UWD74H1vMfm
// Xc4l0JPjVzBFfyoOb4LiU53PB+zPXCy6xro8wMEgwgVRe1ofac2FD6mC+r+pIBgC
// LhrWbhpnGXjxmYXCl4eIT3cAHaSYIsnwZVGR3DsC+ecaf4iowsP/r9mKMDwTKa8x
// Tzffx7Xfw816UYQ+vsz9Xbp63fBEwjkxnPq/wfm9UhJ3v9deiGsIMlSp0ZeIA460
// gVPlH0InX3Opu95vMi7kDI0/8/TjaVcvLovKMLW76Smrb0QaZIGFi408f5uWPf+Y
// lTONyYzePs55By0/nIn+DniT/mT4gTbUsxjbJQ4UyA+HySOhHEfeS+f5pQIDAQAB
// oz8wPTAdBgNVHQ4EFgQUujOInZjomMvXB0815c2AB/DDGz4wDwYDVR0TBAgwBgEB
// /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBABxsGdBsy5tQieCL
// nxzK0lYtzDync8te12GYm3BJz8ya2mGecDavaaBR5aHyAtw8CWgqNgeyP1s37RSW
// Gayt9BxOc3yvaeMFsdxMoV3D+3tOZIvnuxo5TP0Lhpf9vZwXz7BMz6xJ0D3wZ0WC
// 9EG5WpgcnPEVPMw2nzUaO0hfsZTUvQd5pw2HqentwV4EuyacFCDld+9UBU+vnwLo
// GBc7TMh+w8q084NzjXdg20bC1v8t4VPuLbzLwYmkxe27DpsTYSIKNtZzJOQkK3XN
// OsAmCZOqpNMGt35rdTn05UnG66MEOD4QP1JKF65VXbjzFvq5sXGylb0CXm+9Pe81
// 0LpEzgQlGDb29NLLasDo6sT4FJtgLlsCHVXn6MvUjcorSXDRUyqKm38B0q0PibQA
// pEfdAhREp90tiia6QSxCs3MEn+sZlUKRmDiA5F0oY/RvgdEWKsqXKSzODtCwKTbA
// doalBmm7r3RrDTB+EzokXdjh2tz+MHEQja1XCB2YSnauY9qP0w==
// -----END CERTIFICATE-----`,
//   },
// };

// const client = new pg.Client(config);
// client.connect(function (err) {
//   if (err) throw err;
//   client.query("SELECT VERSION()", [], function (err, result) {
//     if (err) throw err;

//     console.log(result.rows[0].version);
//     client.end(function (err) {
//       if (err) throw err;
//     });
//   });
// });
