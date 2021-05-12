<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string("name")->default("");
            $table->string("first_name")->default("");;
            $table->string("last_name")->default("");;
            $table->string("document_type")->default("");;
            $table->string("document_name")->default("");;
            $table->string("nation")->default("");;
            $table->string("residence_country")->default("");;
            $table->string("town")->default("");;
            $table->date("birthday")->default("1900-01-01");
            $table->string("address")->default("");;
            $table->string("phone")->default("");;
            $table->string("email")->default("");;
            $table->string("photo")->default("user.jpg");
            $table->string("account_type")->default("");;
            $table->integer("account_number")->default(0);
            $table->date("account_open_date")->default("1900-01-01");
            $table->float("open_balance")->default(0.0);
            $table->float("account_balance")->default(0.0);
            $table->date("last_fund_date")->default("1900-01-01");
            $table->string("password")->default("");
            $table->string("remember_token")->default("");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
