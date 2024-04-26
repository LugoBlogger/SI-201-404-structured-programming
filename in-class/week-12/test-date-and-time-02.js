function print(s) { console.log(...s); };

let d = new Date();
print(["d: ", d]);

d.setMonth(d.getMonth() + 3, d.getDate() + 14);
print(["d: ", d]);

d.setTime(d.getTime() + 30_000);
print(["d: ", d]);
