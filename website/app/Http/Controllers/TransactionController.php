<?php

namespace App\Http\Controllers;
use App\Models\Transaction;
use App\Http\Resources\TransactionCollection;
use App\Http\Resources\Transaction as TransactionResource;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        return new TransactionCollection(Transaction::all());
    }

    public function transaction($id)
    {
        return new TransactionResource(Transaction::findOrFail($id));
    }
    public function store(Request $request)
    {

        $transaction = Transaction::create($request->all());

        return (new TransactionResource($transaction))
                ->response()
                ->setStatusCode(201);
    }
    public function delete($id)
    {
        $transaction = Transaction::findOrFail($id);
        $transaction->delete();

        return response()->json(null, 204);
    }
}
