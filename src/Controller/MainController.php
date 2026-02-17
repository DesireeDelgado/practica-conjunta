<?php

namespace App\Controller;

use App\Repository\CategoriaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_main')]
    public function index(CategoriaRepository $categoriaRepository): Response
    {
        return $this->render('main/index.html.twig', [
            'categorias' => $categoriaRepository->findAll(),
        ]);
    }
}
