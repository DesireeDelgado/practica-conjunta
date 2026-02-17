<?php

namespace App\Controller;

use App\Entity\Plato;
use App\Form\PlatoType;
use App\Repository\PlatoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/plato')]
final class PlatoController extends AbstractController
{
    #[Route(name: 'app_plato_index', methods: ['GET'])]
    public function index(PlatoRepository $platoRepository): Response
    {
        return $this->render('plato/index.html.twig', [
            'platos' => $platoRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_plato_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $plato = new Plato();
        $form = $this->createForm(PlatoType::class, $plato);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($plato);
            $entityManager->flush();

            return $this->redirectToRoute('app_plato_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('plato/new.html.twig', [
            'plato' => $plato,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_plato_show', methods: ['GET'])]
    public function show(Plato $plato): Response
    {
        return $this->render('plato/show.html.twig', [
            'plato' => $plato,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_plato_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Plato $plato, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PlatoType::class, $plato);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_plato_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('plato/edit.html.twig', [
            'plato' => $plato,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_plato_delete', methods: ['POST'])]
    public function delete(Request $request, Plato $plato, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$plato->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($plato);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_plato_index', [], Response::HTTP_SEE_OTHER);
    }
}
