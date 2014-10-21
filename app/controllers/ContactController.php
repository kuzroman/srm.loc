<?php
// сгенерировать этот файл команда: php artisan controller:make ContactController
// подключение контроллеров происходит в routes.php (прим: Route::resource('contact', 'ContactController'); )

class ContactController extends BaseController {

	/**
	 * Display a listing of the resource.
	 * @return Response
     * http://localhost/contact
	 */
	public function index()
	{
//		$fetchedAllContacts = Contact::all();
//        $fetchedAllAttributes = array();
//
//        foreach ($fetchedAllContacts as $model) {
//            $fetchedAllAttributes[] = $model->attributes;
//        }
//
//        return json_encode($fetchedAllAttributes);

        return Contact::all()->toJson();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
       // return Task::create(Input::all());
	}

	/**
	 * Store a newly created resource in storage. Запись данных POST /contact
	 * @return Response
	 */
	public function store()
	{
        return Contact::create(Input::all());
	}

	/**
     * Возвращает в json формате данные
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
//        return json_encode( Contact::find($id) );
	}

	/**
	 * Show the form for editing the specified resource.
     * GET	/resource/{id}/edit	edit	resource.edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
     * Обновление данных
     * PUT/PATCH	/resource/{id}	update	resource.update
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
        $contact = Contact::find($id);

        $contact->first_name = Input::get('first_name');
        $contact->last_name = Input::get('last_name');
        $contact->email_address = Input::get('email_address');
        $contact->description = Input::get('description');

        $contact->save();
        return Input::all();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        Contact::find($id)->delete();
        //return $id;
	}

}