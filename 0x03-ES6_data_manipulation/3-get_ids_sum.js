#!/usr/bin/node

export default function(students) {
   const ids = students.map(students => students.id)
   return ids.reduce((acc, current) => acc + current);
}
