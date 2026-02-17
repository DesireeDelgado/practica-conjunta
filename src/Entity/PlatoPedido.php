<?php

namespace App\Entity;

use App\Repository\PlatoPedidoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlatoPedidoRepository::class)]
class PlatoPedido
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Plato $id_plato = null;

    #[ORM\ManyToOne]
    private ?Pedido $id_pedido = null;

    #[ORM\Column]
    private ?int $cantidad_plato = null;

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

    public function getIdPedido(): ?Pedido
    {
        return $this->id_pedido;
    }

    public function setIdPedido(?Pedido $id_pedido): static
    {
        $this->id_pedido = $id_pedido;

        return $this;
    }

    public function getCantidadPlato(): ?int
    {
        return $this->cantidad_plato;
    }

    public function setCantidadPlato(int $cantidad_plato): static
    {
        $this->cantidad_plato = $cantidad_plato;

        return $this;
    }
}
