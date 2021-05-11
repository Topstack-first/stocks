<?php

namespace App\Http\Controllers;
use App\Models\Briefcase;
use App\Http\Resources\BriefcaseCollection;
use App\Http\Resources\Briefcase as BriefcaseResource;
use Illuminate\Http\Request;

class BriefcaseController extends Controller
{
    public function index()
    {
        return new BriefcaseCollection(Briefcase::all());
    }

    public function briefcase($id)
    {
        return new BriefcaseResource(Briefcase::findOrFail($id));
    }
    public function store(Request $request)
    {

        $briefcase = Briefcase::create($request->all());

        return (new BriefcaseResource($briefcase))
                ->response()
                ->setStatusCode(201);
    }
    public function delete($id)
    {
        $briefcase = Briefcase::findOrFail($id);
        $briefcase->delete();

        return response()->json(null, 204);
    }
}
