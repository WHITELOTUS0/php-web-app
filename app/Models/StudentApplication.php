<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentApplication extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'student_name',
        'index_number',
        'dob',
        'email',
        'former_school',
        'first_choice',
        'uce_year',
        'aggregate_score',
        'english_score',
        'math_score',
        'biology_score',
        'chemistry_score',
        'physics_score',
        'geography_score',
        'history_score',
        'best_optional_subject',
        'best_optional_score',
        'second_best_optional_subject',
        'second_best_optional_score',
        'third_best_optional_subject',
        'third_best_optional_score',
        'first_choice_combination',
        'second_choice_combination',
        'third_choice_combination',
        'results_file_path',
        'parent_name',
        'parent_email',
        'parent_tel',
        'parent_nationality',
        'country',
        'parent_national_id',
    ];

    // The rest of your model...
}
