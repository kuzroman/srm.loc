<?php

class PostsSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        Post::truncate(); // очистить таблицу post от предыдущих записей

        // faker добавит 20 разных записей в базу
        for ($i = 0; $i < 20; $i++) {
            // описание faker - http://systemsarchitect.net/faker-the-ultimate-lorem-ipsum-for-php/
            // и здесь - https://github.com/fzaninotto/Faker/blob/master/composer.json
            Post::create([
                'title' => $faker->word(2), // faker в действии - добавить 2 слова (sentence(200) - предложение из 200 букв)
                'body' => $faker->paragraph(20),
                'author' => $faker->name,
                'preview' => $faker->imageUrl(200,200),
            ]);
        }
    }

}