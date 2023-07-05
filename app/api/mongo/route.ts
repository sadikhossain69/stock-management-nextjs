"use server"

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    // Replace the uri string with your connection string.
    const uri: string = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.a0njza1.mongodb.net/`;

    const client: any = new MongoClient(uri);

    try {
        const database : any = client.db('sample_airbnb');
        const listAndReviews : any = database.collection('exmaple');

        // Query for a movie that has the title 'Back to the Future'
        // const query = { title: 'Back to the Future' };
        // const movie = await movies.findOne(query);
        const reviews : string[] | null = await listAndReviews.find({}).toArray()

        console.log(reviews);
        return NextResponse.json(reviews);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

