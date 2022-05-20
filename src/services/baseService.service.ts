import { Injectable } from '@nestjs/common';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';

@Injectable()
export class BaseService {
  async Paginate(query: PaginateQuery, repository): Promise<Paginated<any>> {
    return paginate(query, await repository, {
      sortableColumns: ['id', 'firstname', 'lastname', 'title', 'email'],
      searchableColumns: ['firstname', 'lastname', 'title', 'email'],
      defaultSortBy: [['id', 'DESC']],
    });
  }
}
