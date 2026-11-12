// dtos/user.dto.js — a forma oficial de um user sair da API
export function toUserDTO(user) {
  return {
    id: user.id,
    nome: user.nome,
    email: user.email,
    createdAt: user.createdAt ?? null
  }
}

// no controller — nada de vazar o model cru:
res.status(200).json(toUserDTO(user))