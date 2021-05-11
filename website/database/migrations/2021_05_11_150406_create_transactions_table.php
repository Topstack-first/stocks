<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("investor_id")->default(0);;
            $table->string("request_type")->default("");;
            $table->date("application_date")->default("1900-01-01");
            $table->string("currency")->default("");;
            $table->float("amount")->default(0);
            $table->string("comment")->default("");;
            $table->integer("beneficiary_account_number")->default(0);
            $table->string("beneficiary_address")->default("");;
            $table->string("beneficiary_bank_name")->default("");;
            $table->string("swift_bank")->default("");;
            $table->string("baneficiary_bank_address")->default("");;
            $table->date("funds_accreditation_date")->default("1900-01-01");
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
        Schema::dropIfExists('transactions');
    }
}
