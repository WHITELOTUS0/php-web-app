<?php

namespace App\Http\Controllers;

use App\Models\StudentApplication;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StudentApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
        return Inertia::render('Applications/Index', [
            //
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(StudentApplication $studentApplication)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(StudentApplication $studentApplication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, StudentApplication $studentApplication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StudentApplication $studentApplication)
    {
        //
    }
}
