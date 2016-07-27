/**
 * Author: Mary Kuchumova
 * Date: 26 Jul 2016
 * Time: 15:56
 */

import * as elasticsearch from 'elasticsearch';
import { environment as env } from "../../environment";

export class ElasticsearchService {

  getClient() {
    return new elasticsearch.Client({
      host: env.elastic_host
    });
  }
  
  test(client) {
    client.ping({
      requestTimeout: Infinity,
      hello: "elasticsearch!"
    }, function (error) {
      if (error) {
        console.trace('elasticsearch cluster is down!');
      } else {
        console.log('All is well');
      }
    });
  }
}