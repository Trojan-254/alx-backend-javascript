#!/usr/bin/node

export default function(students, city) {
   return students.filter((students) => students.location == city);
}
