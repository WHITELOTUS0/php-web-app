<?php

namespace App\Http\Controllers;

use App\Models\StudentApplication;
use Illuminate\Http\RedirectResponse;
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
    public function store(Request $request): RedirectResponse
{
    $validated = $request->validate([
        'student_name' => 'required|string|max:255',
        'index_number' => 'required|string|max:255|unique:student_applications',
        'dob' => 'required|date',
        'email' => 'required|string|email|max:255|unique:student_applications',
        'former_school' => 'required|string|max:255',
        'first_choice' => 'required|string|max:255',
        'uce_year' => 'required|digits:4|integer|min:1900|max:' . date('Y'),
        'aggregate_score' => 'required|integer|min:0|max:36',
        'english_score' => 'required|integer|min:1|max:9',
        'math_score' => 'required|integer|min:1|max:9',
        'biology_score' => 'required|integer|min:1|max:9',
        'chemistry_score' => 'required|integer|min:1|max:9',
        'physics_score' => 'required|integer|min:1|max:9',
        'geography_score' => 'required|integer|min:1|max:9',
        'history_score' => 'required|integer|min:1|max:9',
        'best_optional_subject' => 'nullable|string|max:255',
        'best_optional_score' => 'nullable|integer|min:1|max:9',
        'second_best_optional_subject' => 'nullable|string|max:255',
        'second_best_optional_score' => 'nullable|integer|min:1|max:9',
        'third_best_optional_subject' => 'nullable|string|max:255',
        'third_best_optional_score' => 'nullable|integer|min:1|max:9',
        'first_choice_combination' => 'required|string|max:255',
        'second_choice_combination' => 'nullable|string|max:255',
        'third_choice_combination' => 'nullable|string|max:255',
        'results_file_path' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048', // Assuming you want to allow PDF and image files
        'parent_name' => 'required|string|max:255',
        'parent_email' => 'required|string|email|max:255',
        'parent_tel' => 'required|string|max:255',
        'parent_nationality' => 'required|string|max:255',
        'country' => 'required|string|max:255',
        'parent_national_id' => 'required|string|max:255',
    ]);
    if ($request->has('errors')) {
        \Log::error('Validation errors:', $request->errors());
    }

    $application = new StudentApplication($validated);

    // Handle file upload if results_file_path is provided
    if ($request->hasFile('results_file_path')) {
        $file = $request->file('results_file_path');
        $filename = time() . '_' . $file->getClientOriginalName();
        $filePath = $file->storeAs('uploads', $filename, 'public');
        $validated['results_file_path'] = $filePath; // Add the path to the validated data
    }

    // Create the application with the validated data
    try {
        $application = StudentApplication::create($validated);
        \Log::info('Application saved successfully:', $application->toArray());
    } catch (\Exception $e) {
        \Log::error('Failed to save application:', $e->getMessage());
    }

    return redirect(route('apply.index'))->with('message', 'Application submitted successfully.');
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
