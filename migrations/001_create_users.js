/** @param {import('knex').Knex} knex */
export function up(knex) {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary();
		table.string('hackclub_id').unique().notNullable();
		table.string('email').notNullable();
		table.string('first_name');
		table.string('last_name');
		table.string('slack_id');
		table.string('verification_status');
		table.boolean('ysws_eligible').defaultTo(false);
		table.string('phone_number');
		table.date('birthday');
		table.string('legal_first_name');
		table.string('legal_last_name');
		table.jsonb('addresses').defaultTo('[]');
		table.string('role').defaultTo('user').notNullable();
		table.timestamps(true, true);
	});
}

/** @param {import('knex').Knex} knex */
export function down(knex) {
	return knex.schema.dropTable('users');
}
