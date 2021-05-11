<?php

namespace App\Http\Controllers;
use App\Models\Invester;
use App\Http\Resources\InvesterCollection;
use App\Http\Resources\Invester as InvesterResource;
use Illuminate\Http\Request;

class InvesterController extends Controller
{
    public function index()
    {
        return new InvesterCollection(Invester::all());
    }

    public function invester($id)
    {
        return new InvesterResource(Invester::findOrFail($id));
    }
    public function store(Request $request)
    {
        $invester = Invester::create($request->all());

        return (new InvesterResource($invester))
                ->response()
                ->setStatusCode(201);
    }
    public function delete($id)
    {
        $invester = Invester::findOrFail($id);
        $invester->delete();

        return response()->json(null, 204);
    }
}
