<?php

namespace App\Entity;

use App\Repository\IngredientePlatoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: IngredientePlatoRepository::class)]
class IngredientePlato
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Ingrediente $id_ingrediente = null;

    #[ORM\ManyToOne]
    private ?Plato $id_plato = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdIngrediente(): ?Ingrediente
    {
        return $this->id_ingrediente;
    }

    public function setIdIngrediente(?Ingrediente $id_ingrediente): static
    {
        $this->id_ingrediente = $id_ingrediente;

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
