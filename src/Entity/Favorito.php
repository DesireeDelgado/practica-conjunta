<?php

namespace App\Entity;

use App\Repository\FavoritoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FavoritoRepository::class)]
class Favorito
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Plato $id_plato = null;

    #[ORM\ManyToOne]
    private ?User $id_user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdPlato(): ?Plato
    {
        return $this->id_plato;
    }

    public function setIdPlato(?Plato $id_plato): static
    {
        $this->id_plato = $id_plato;

        return $this;
    }

    public function getIdUser(): ?User
    {
        return $this->id_user;
    }

    public function setIdUser(?User $id_user): static
    {
        $this->id_user = $id_user;

        return $this;
    }
}
