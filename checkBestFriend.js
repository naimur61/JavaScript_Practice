const person1 = { name: "Luna", friend: "Aira" };
const person2 = { name: "Jachi", friend: "Natasha" };
const person4 = { name: "Aira", friend: "Luna" };
const person3 = { name: "Joli", friend: "Wiliams" };


function isBestFriend(p1, p2) {
   const name = p1.name == p2.friend;
   const friend = p1.friend == p2.name;

   if (name && friend) {
      return `${p1?.name} and ${p2?.name} are best friend.`;
   }
   return "They are not best friend.";
}


console.log(isBestFriend(person1, person4));