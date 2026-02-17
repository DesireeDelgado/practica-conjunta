<?php

namespace App\Entity;

use App\Repository\PedidoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PedidoRepository::class)]
class Pedido
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'pedidos')]
    private ?User $id_user = null;

    #[ORM\Column(length: 255)]
    private ?string $direccion_envio = null;

    #[ORM\Column(length: 255)]
    private ?string $metodo_pago = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDireccionEnvio(): ?string
    {
        return $this->direccion_envio;
    }

    public function setDireccionEnvio(string $direccion_envio): static
    {
        $this->direccion_envio = $direccion_envio;

        return $this;
    }

    public function getMetodoPago(): ?string
    {
        return $this->metodo_pago;
    }

    public function setMetodoPago(string $metodo_pago): static
    {
        $this->metodo_pago = $metodo_pago;

        return $this;
    }
}
