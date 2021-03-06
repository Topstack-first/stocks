<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\RequestType;

class CreateRequestTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_types', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->timestamps();
        });
        $requesttypes = array(
            array("name"=>"Aumento Capital"),
            array("name"=>"Retiro Capital"),
        );
        foreach ($requesttypes as $requesttype) {
            RequestType::firstOrCreate($requesttype);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('request_types');
    }
}
