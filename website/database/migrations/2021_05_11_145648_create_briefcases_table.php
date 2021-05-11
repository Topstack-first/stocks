<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBriefcasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('briefcases', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("order_number")->default(0);
            $table->string("state")->default("ACTIVO");
            $table->string("product")->default("");;
            $table->string("ticket")->default("");;
            $table->string("derivative")->default("");;
            $table->float("lotaje")->default(0);
            $table->float("current_balance")->default(0);
            $table->float("investment")->default(0);
            $table->float("maintenance_margin")->default(0);
            $table->string("long_short")->default("LONG");
            $table->float("open_price")->default(0);
            $table->float("goal")->default(0);
            $table->string("stop_lost")->default("LOST");
            $table->date("operation_open_date")->default("1900-01-01");
            $table->date("operation_close_date")->default("1900-01-01");
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
        Schema::dropIfExists('briefcases');
    }
}
