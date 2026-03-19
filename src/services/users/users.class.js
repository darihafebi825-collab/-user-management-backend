class UsersService {
  constructor(options) {
    this.db = options.db;
  }

  async find(params) {
    const query = this.db('users').where('deleted', false).orderBy('created_at', 'desc');
    return await query;
  }

  async get(id) {
    const user = await this.db('users').where({ id }).first();
    if (!user) throw new Error(`User with id ${id} not found`);
    return user;
  }

  async create(data) {
    const [user] = await this.db('users')
      .insert({
        name: data.name,
        email: data.email,
        gender: data.gender,
        phone: data.phone || null,
        address: data.address || null,
        deleted: false,
        created_at: new Date(),
        updated_at: new Date()
      })
      .returning('*');
    return user;
  }

  async patch(id, data) {
    const [user] = await this.db('users')
      .where({ id })
      .update({
        ...data,
        updated_at: new Date()
      })
      .returning('*');
    if (!user) throw new Error(`User with id ${id} not found`);
    return user;
  }

  async update(id, data) {
    return this.patch(id, data);
  }

  async remove(id) {
    return this.patch(id, { deleted: true });
  }
}

module.exports = UsersService;
