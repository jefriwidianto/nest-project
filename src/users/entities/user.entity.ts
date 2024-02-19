import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 't_user', schema: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'secure_id' })
  secureId: string;

  @Column()
  nama: string;

  @Column()
  nik: string;

  @Column({ name: 'no_hp' })
  numberPhone: string;

  @Column({ name: 'no_rekening' })
  accountBank: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
