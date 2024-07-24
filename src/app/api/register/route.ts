import { encrypt } from '@/utils/encryption';
import { createUser, findUser } from '@/utils/database/user.query';
import { Prisma } from '@prisma/client';

export async function POST(req: Request) {
  try {
    const {
      email,
      password,
      nama
    }: { email: string; password: string; nama: string } = await req.json();

    if (!email || !password || !nama) {
      return Response.json(
        { status: 403, message: 'All credentials must be filled' },
        {
          status: 403
        }
      );
    }

    const checkUser = await findUser({ email });
    if (checkUser)
      return Response.json(
        { status: 403, message: 'Email sudah terdaftar' },
        {
          status: 403
        }
      );

    await createUser({
      email,
      password,
      name: nama
    });

    return Response.json({ status: 201, message: 'Sukses' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: 'internal server error'
    });
  }
}
