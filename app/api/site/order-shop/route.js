// Shop ürünleri sıralaması için kullanılır
export async function POST(request) {
  const res = await request.json();
  const { items } = res;
  const { db } = await connectToDatabase();
  const result = await db.collection("shop").deleteMany({});

  items.map(async (item) => {
    item._id = new ObjectId(item._id);
  });
  const insertedItems = await db.collection("shop").insertMany(items);

  return NextResponse.json({
    message: "Shop ürünleri düzenlendi düzenlendi",
    insertedItems,
  });
}
