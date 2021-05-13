<?php

namespace App\Http\Controllers;
use App\Models\State;
use App\Http\Resources\StateCollection;
use App\Http\Resources\State as StateResource;

use App\Models\RequestType;
use App\Http\Resources\RequestTypeCollection;
use App\Http\Resources\RequestType as RequestTypeResource;

use Illuminate\Http\Request;


class TypesController extends Controller
{
    public function states()
    {
        return new StateCollection(State::all());
    }
    public function requestTypes()
    {
        return new RequestTypeCollection(RequestType::all());
    }
}
