<?php

class BuyersSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        Buyer::truncate(); // очистить таблицу Buyer от предыдущих записей

        // faker добавит n разных записей в базу
        for ($i = 0; $i < 10; $i++) {
            // описание faker - http://systemsarchitect.net/faker-the-ultimate-lorem-ipsum-for-php/
            // и здесь - https://github.com/fzaninotto/Faker/blob/master/composer.json
            Buyer::create([
                'name' => $faker->company(),
                'kind' => $faker->numberBetween($min = 1, $max = 2),
                'email' => $faker->email,
            ]);
        }
    }

}