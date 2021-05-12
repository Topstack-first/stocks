<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Http\Resources\UserCollection;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return new UserCollection(User::all());
    }

    public function user($id)
    {
        return new UserResource(User::findOrFail($id));
    }
    public function store(Request $request)
    {
        $User = User::create($request->all());

        return (new UserResource($User))
                ->response()
                ->setStatusCode(201);
    }
    public function delete($id)
    {
        $User = User::findOrFail($id);
        $User->delete();

        return response()->json(null, 204);
    }
}
