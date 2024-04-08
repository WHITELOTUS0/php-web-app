<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_applications', function (Blueprint $table) {
            $table->id();
            $table->string('student_name');
            $table->string('index_number')->unique();
            $table->date('dob');
            $table->string('email')->unique();
            $table->string('former_school');
            $table->string('first_choice');
            $table->year('uce_year');
            $table->unsignedTinyInteger('aggregate_score');
            $table->unsignedTinyInteger('english_score');
            $table->unsignedTinyInteger('math_score');
            $table->unsignedTinyInteger('biology_score');
            $table->unsignedTinyInteger('chemistry_score');
            $table->unsignedTinyInteger('physics_score');
            $table->unsignedTinyInteger('geography_score');
            $table->unsignedTinyInteger('history_score');
            $table->string('best_optional_subject');
            $table->unsignedTinyInteger('best_optional_score');
            $table->string('second_best_optional_subject');
            $table->unsignedTinyInteger('second_best_optional_score');
            $table->string('third_best_optional_subject');
            $table->unsignedTinyInteger('third_best_optional_score');
            $table->string('first_choice_combination');
            $table->string('second_choice_combination');
            $table->string('third_choice_combination');
            $table->string('results_file_path');
            $table->string('parent_name');
            $table->string('parent_email');
            $table->string('parent_tel');
            $table->string('parent_nationality');
            $table->string('country');
            $table->string('parent_national_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_applications');
    }
};
