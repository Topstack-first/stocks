<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\State;
class CreateStatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('states', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->timestamps();
        });
        $states = array(
            array("name"=>"ACTIVO"),
            array("name"=>"MERCADO"),
            array("name"=>"CERRADO"),
            array("name"=>"HOLD"),
            array("name"=>"VENDIDO"),
        );
        foreach ($states as $state) {
            State::firstOrCreate($state);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('states');
    }
}
