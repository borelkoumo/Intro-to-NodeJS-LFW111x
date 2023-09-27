"use strict"
const data = [
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Delicious overpriced chocolate.",
  },
];

export default async (fastify) => {
  fastify.get('/', async (request, reply) => {
    return data
  })
}