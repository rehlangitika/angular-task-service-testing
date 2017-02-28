import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {RouterOutletMap} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {AppSingletonService} from "../app.singletonservice";
import {Observable} from "rxjs/Observable";
import {ShowTaskComponent} from "./showtask.component";
import "rxjs/add/observable/of";

describe('ShowTaskComponent', function () {
  let de: DebugElement;
  let comp: ShowTaskComponent;
  let fixture: ComponentFixture<ShowTaskComponent>;
  let service: AppSingletonService;

  class MockRouter {

  }

  class MockActivateRouter {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTaskComponent],
      providers: [RouterOutletMap, AppSingletonService],
      imports: [RouterTestingModule, HttpModule, FormsModule, CommonModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppSingletonService);
  });

  it('it should be able to get data from service', () => {
    spyOn(service, 'showTask').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );
    comp.ngOnInit();
    expect(comp.myTasks).toEqual([{
      date: '',
      title: '',
      description: '',
      priority: ''
    }])
  });

  it('it should be able to delete data from service', () => {
    spyOn(service, 'delete').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );
    comp.deleteTask("2");
    expect(comp.newTasks).toEqual([{
      date: '',
      title: '',
      description: '',
      priority: ''
    }])
  });
});
