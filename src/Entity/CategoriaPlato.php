<?php

namespace App\Entity;

use App\Repository\CategoriaPlatoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoriaPlatoRepository::class)]
class CategoriaPlato
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Categoria $id_categoria = null;

    #[ORM\ManyToOne]
    private ?Plato $id_plato = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdCategoria(): ?Categoria
    {
        return $this->id_categoria;
    }

    public function setIdCategoria(?Categoria $id_categoria): static
    {
        $this->id_categoria = $id_categoria;

        return $this;
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
}
