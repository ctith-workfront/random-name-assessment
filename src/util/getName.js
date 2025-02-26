const names = [
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", 
    "Ivy", "Jack", "Katherine", "Leo", "Mia", "Nathan", "Olivia", "Paul", 
    "Quinn", "Ryan", "Sophia", "Thomas"
  ];
  
export function getName(){
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      resolve({ name: randomName });
    }, 3000); 
  });
}