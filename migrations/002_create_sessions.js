/** @param {import('knex').Knex} knex */
export function up(knex) {
	return knex.schema.createTable('sessions', (table) => {
		table.string('id').primary();
		table.integer('user_id').unsigned().notNullable();
		table.timestamp('expires_at').notNullable();
		table.timestamps(true, true);

		table.foreign('user_id').references('users.id').onDelete('CASCADE');
		table.index('expires_at');
		table.index('user_id');
	});
}

/** @param {import('knex').Knex} knex */
export function down(knex) {
	return knex.schema.dropTable('sessions');
}
